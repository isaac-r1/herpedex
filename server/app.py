from flask import Flask
from flask import render_template, redirect, url_for, request, session
from werkzeug.utils import secure_filename
import json 
from propelauth_flask import init_auth, current_user
import requests
import os
import logging
import pprint
from pathlib import Path

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

class LoggingMiddleware(object):
    def __init__(self, app):
        self._app = app

    def __call__(self, env, resp):
        errorlog = env['wsgi.errors']
        pprint.pprint(('REQUEST', env), stream=errorlog)

        def log_response(status, headers, *args):
            pprint.pprint(('RESPONSE', status, headers), stream=errorlog)
            return resp(status, headers, *args)

        return self._app(env, log_response)
    
def fetch_species_data():
    # iNaturalist API URL
    url = "https://api.inaturalist.org/v1/observations/species_counts"
    
    # Parameters for the API request
    params = {
        "iconic_taxa[]": ["Reptilia", "Amphibia"],
        "place_id": 1
    }
    
    # Make the API request
    response = requests.get(url, params=params)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        
        # Initialize an array to hold the processed results
        species_data = []
        
        # Loop through each object in the "results" array
        for result in data.get("results", []):
            taxon = result.get("taxon", {})
            
            # Extract the required keys from the "taxon" object
            name = taxon.get("name")
            preferred_common_name = taxon.get("preferred_common_name")
            wikipedia_url = taxon.get("wikipedia_url")
            default_photo = taxon.get("default_photo", {})
            square_url = default_photo.get("square_url")
            
            # Create a new JSON object with the extracted data
            species_obj = {
                "name": name,
                "preferred_common_name": preferred_common_name,
                "wikipedia_url": wikipedia_url,
                "square_url": square_url
            }
            
            # Append the new object to the species_data array
            species_data.append(species_obj)
        
        # Return the processed species data
        return species_data
    else:
        print(f"Failed to fetch data: {response.status_code}")
        return []
    


auth = init_auth(
    "https://5623171022.propelauthtest.com",
    "120e09ddddb5c6568a114c425e3c9c5ebdc33ea6a3136de8c730d9cc1e5bc068832d93cfaa2c7e9dae40dabd2bb642f6"
    )        



app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

snakes_cache = fetch_species_data()

#@app.route('/login')
#def login(name=None):
#    return redirect('https://5623171022.propelauthtest.com/en/login')

@app.route('/register')
def register(name=None):
    return redirect('https://5623171022.propelauthtest.com/en/signup')

@app.route('/account')
def account(name=None):
    return redirect('https://5623171022.propelauthtest.com/account')

@app.route('/dashboard')
def dashboard(name=None):
    return render_template('dashboard.html')

@app.route('/herpedex')
def herpedex(name=None):
    # Slice the array
    lim = 300
    sliced_data = snakes_cache[:lim]
    
    # Format the response similar to an API response
    response = {
        "total_results": len(snakes_cache),
        "results": sliced_data,
        "slice_range": {
            "start": 0,
            "end": lim
        }
    }
    
    return render_template('herpedex.html', snake_data=snakes.fetch_species_data()[:lim])

@app.route('/tripplan')
def tripplan(name=None):
    return render_template('tripplan.html')

#@app.route('/')
#def index(name=None):
#    return render_template('index.html')

@app.route("/api/whoami")
@auth.require_user
def who_am_i():
    """This route is protected, current_user is always set"""
    return {"user_id": current_user.user_id}



UPLOAD_FOLDER = 'uploads/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
@app.route('/upload', methods=['POST'])
def fileUpload():
    Path(UPLOAD_FOLDER).mkdir(parents=True, exist_ok=True)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([UPLOAD_FOLDER, filename])
    file.save(destination)
    return "success"

@app.route('/api/creatures')
def load_creatures():
    low = int(request.args.get('low'))
    high = int(request.args.get('high'))
    # Slice the array
    sliced_data = snakes_cache[low:high]
    
    # Format the response similar to an API response
    response = {
        "total_results": len(snakes_cache),
        "results": sliced_data,
        "slice_range": {
            "start": low,
            "end": high
        }
    }
    
    # Return the formatted JSON response
    return json.dumps(response, indent=2)
if __name__ == '__main__':
    app.wsgi_app = LoggingMiddleware(app.wsgi_app)
    app.run(port=3001)