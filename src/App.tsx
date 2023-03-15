import { Routes, Route} from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import TemplateDeafault from './template/templateDeafault/TemplateDeafault';

function App() {
  return (
    <div className="App">
      <Routes>
       {publicRoutes.map((route,index)=>{
        let Layout = TemplateDeafault;
        let Pages = route.component;
        return <Route key={index} path={route.path} element={<Layout><Pages/></Layout>}/>
       })}
      </Routes>
    </div>
  );
}

export default App;
