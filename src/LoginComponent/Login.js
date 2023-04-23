import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { _apiURLUser } from "../apiURL";

function Login() {
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    var userDetails = { email: email, password: password };
    axios.post(_apiURLUser + "login", userDetails).then((result) => {
      console.log(result.response.data.token);
      setOutput("it working");
      setEmail("");
      setPassword("");
    });
  };

  return (
    <div>
      {/* Content Start */}
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-12">
              <div class="border-start border-5 border-primary ps-5 mb-5">
                <h2 class="text-primary text-uppercase">
                  Welcome To Tenders, Home Page
                </h2>

                <div class="col-lg-6">
                  <h2>Register Here!!!</h2>
                  <font style={{ color: "blue" }}>{output}</font>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label for="email">Email address:</label>
                      <input
                        type="email"
                        class="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <br />
                    <br />
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input
                        type="password"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" class="btn btn-success">
                      Login
                    </button>
                  </form>
                </div>
                <div class="col-lg-6">
                  <h2>Information : </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta asperiores neque ratione et tempora voluptas esse vel
                    minima pariatur eveniet autem alias repellat itaque possimus
                    rerum reprehenderit porro ipsam dolorem, veniam quo corporis
                    placeat voluptatem minus. Ipsum eum laudantium facilis?
                    Nesciunt minima quo, inventore illo perspiciatis ex
                    laboriosam distinctio aut, consequuntur sequi blanditiis
                    fugit voluptas tempora, nihil quisquam! Deleniti perferendis
                    fuga optio repellat id delectus ad obcaecati harum fugit
                    laudantium laborum cupiditate consequuntur omnis, rem
                    officiis quia quos quod consequatur natus reprehenderit
                    ipsum voluptas minus minima. Pariatur a sed nostrum animi
                    voluptates corrupti laborum repellendus, nisi id voluptatem
                    facilis? Sint quaerat magni alias esse eligendi eos totam
                    voluptates eveniet. Aperiam magnam adipisci aliquid
                    doloremque qui earum non, tempore sit cum voluptates rerum
                    dolorem quis aut. Obcaecati, enim. Labore, placeat maiores
                    eligendi obcaecati reiciendis fuga corrupti earum? Maxime
                    recusandae obcaecati expedita ipsum iusto, nobis modi
                    repellat, porro ullam tempora cupiditate assumenda
                    voluptatibus alias. Dignissimos ipsa voluptates delectus
                    laudantium impedit eum quaerat consequatur est modi vero
                    provident velit dolorem esse, commodi rem, dicta labore
                    repudiandae reiciendis voluptas praesentium sit amet sint,
                    nisi officiis! Eaque adipisci laudantium delectus
                    distinctio, quibusdam mollitia neque repellat hic architecto
                    labore vel harum eum veritatis repellendus quia sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content End */}
    </div>
  );
}

export default Login;
