// import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';

function App() {
    return ( <
        div className = "App" >
        <
        Dinner dishName = "karahi"
        sweetDish = "lassi" / >
        <
        Dinner dishName = "biryani"
        sweetDish = "custored" / >
        <
        Dinner dishName = "kukar"
        sweetDish = "kheer" / >
        <
        /div>
    );
}

export default App;