import requests
import json

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