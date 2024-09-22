from flask import Flask
from flask import render_template, redirect, url_for, request
import snakes 
import json 
from propelauth_flask import init_auth, current_user

auth = init_auth(
    "https://5623171022.propelauthtest.com",
    "120e09ddddb5c6568a114c425e3c9c5ebdc33ea6a3136de8c730d9cc1e5bc068832d93cfaa2c7e9dae40dabd2bb642f6"
    )        

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

snakes_cache = snakes.fetch_species_data()

@app.route('/login')
def login(name=None):
    return redirect('https://5623171022.propelauthtest.com/en/login')

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

@app.route('/')
def index(name=None):
    return render_template('index.html')

@app.route("/api/whoami")
def who_am_i():
    """This route is protected, current_user is always set"""
    return {"user_id": current_user.user_id}


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
if __name__ == '__main__':  # pragma: no cover
    app.run(port=80)