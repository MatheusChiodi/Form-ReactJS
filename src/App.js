import Jumbotron from './components/jumbotron';
import Submit from './components/submit';
import FormText from './components/text';
const App = () =>{
    return (
        <>
            <FormText></FormText>
            <Jumbotron>
                <form method="post" action="index.html">
                    <div class="mb-3">
                        <label for="email" class="form-label w-100 text-center text-success" required>Type your e-mail</label>
                        <input type="email" class="form-control" id="email"/>
                        <Submit></Submit>
                    </div>
                </form>
            </Jumbotron>
        </>
    )
}

export default App; 

// export default function App() { return ( <h1>Hello World</h1> ) }