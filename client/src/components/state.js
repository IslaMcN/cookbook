import React from 'react';
import axios from 'axios';
import RecipeCard from './recipeCard';

class State extends React.Component {
    constructor(){
        super();
        this.state={
          name: "",
          ingredients: {},
          instructions: {}
        }
      }
      componentDidMount = () => {
        axios.get('')
        .then((res) => {
            this.setState({
                name: res.data.name
            });
        })
        .catch(err => {
            console.log(err)
        });

        axios.get('')
        .then(res => {
            this.setState({
                ingredients: res.data.ingredients
            });
        })
        .catch(err => console.log(err)
        )

        axios.get('')
        .then(res => {
            this.setState({
                instructions: res.data.instructions
            });
        })
        .catch(err => console.log(err))
      }

      render(){
          return (
              <div>
                  <h1>Recipes We Love</h1>
                  <RecipeCard />
              </div>
          )
      }
     
}

export default State; 