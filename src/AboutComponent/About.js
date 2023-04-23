import "./About.css";
import axios from 'axios';

function About() {

  const test=(()=>(
    axios.get("http://localhost:3001/user/").then((result)=>(
      console.log(result)
      ))
  ))

  return (
    <div>
     {/* Content Start */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-12">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h2 className="text-primary text-uppercase">Welcome To Tenders, About Page</h2>
                        <h2>Api Test </h2>
                        <button onClick={test}>CLick here to make API work</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Content End */} 
    </div>
  );
}

export default About;