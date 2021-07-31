import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import login from './component/login';
import Signup from './component/Signup';
import Home from './component/Home';
import EmailLocker from './component/EmailLocker';
import BankLocker from './component/BankLocker';
import ImageLocker from './component/ImageLocker';
import Profile from './component/Profile';
import AdminHome from './component/admin/AdminHome';
import AdminEmailLocker from './component/admin/AdminEmailLocker';
import AdminBankLocker from './component/admin/AdminBankLocker';
import AddUser from './component/admin/AddUser';
import EditUser from './component/admin/EditUser';
function App() {
  return (
    <Router>
      <Route path="/login" component={login}/>
      <Route path="/home" component={Home}/>
      <Route path="/register" component={Signup}/>
      <Route path="/email-locker" component={EmailLocker}/>
      <Route path="/bank-locker" component={BankLocker}/>
      <Route path="/image-locker" component={ImageLocker}/>
      <Route path="/profile" component={Profile}/>

      <Route path="/admin/home" component={AdminHome}/>
      <Route path="/admin/email-locker" component={AdminEmailLocker}/>
      <Route path="/admin/add-user" component={AddUser}/>
      <Route path="/admin/edit-user" component={EditUser}/>
      <Route path="/admin/bank-locker" component={AdminBankLocker}/>
      {/* <Route path="/admin/image-locker" component={ImageLocker}/> */}
      <Route path="/admin/profile" component={Profile}/>
    </Router>
  );
}

export default App;
