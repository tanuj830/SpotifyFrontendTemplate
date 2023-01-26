// import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Accordion from './components/AccordionComponent';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Support from './pages/Support';
import Download from './pages/Download';
import Premium from './pages/Premium';
import Signin from './pages/Signin';
import Login from './pages/Login';

// import {Download} from './pages/Download';
import Home from './pages/Home';
const App = () => {
    return (
        <>




            <Router>
                {/* <MainSection />
<Header />
<Accordion />
<Footer />  */}

                <Switch>
                    {/* <Route path="/"  component={Home} exact></Route> */}
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/Premium" component={Premium} ></Route>
                    <Route path="/support" component={Support} ></Route>
                    <Route path="/download" component={Download}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signin" component={Signin} ></Route>
                    <Route path="/footer" component={Footer}></Route>
                </Switch>

            </Router>


        </>
    );
}
export default App;




// --container-bgcolor: #a0c3d2;
// rgb(180, 155, 200);

// #eeeeee;




