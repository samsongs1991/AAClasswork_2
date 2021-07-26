# @pokemon = Pokemon.all is available from the controller render this page
# array of all pokemon

@pokemon.each do |pokemon|
    json.set! pokemon.id do
        json.extract! pokemon, :id, :name
        json.image_url asset_path("pokemon_snaps/#{pokemon.image_url}")
    end
end