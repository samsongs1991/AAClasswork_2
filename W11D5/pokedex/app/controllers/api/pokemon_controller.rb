class Api::PokemonController < ApplicationController

    def index
        @pokemon = Pokemon.all 
        render :index 
    end

    def show
        @pokemon = Pokemon.includes(:moves, :items).find(params[:id])
        render :show
    end
    
end
