import FormTrainer from "../components/HomePage/FormTrainer"

const HomePage = () => {
    return(
        <div className="background_color">
        <h1 className="app_1"> <div class="circle"></div> Pokedex ..... Initializing ver.3.4/2024</h1>
        <h2 className="app_2">Hi Trainer! Welcome back to the arena! - Please, await until your Pokedex downloads the latest upgrade.</h2>
        <p className="app_3">Insert your Trainer name, be aware that you have to insert more than 3 letters! We did significant changes to our database. Be patient, certain changes to the database can take some time.</p>   
        <FormTrainer />
        </div>
    )
    
    }

export default HomePage;

