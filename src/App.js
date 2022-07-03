import './global.css';
import PageTitle from './components/PageTitle';
import ContactList from './components/ContactList';
function App() {
  return (
    <div className="bg-gray-400 container mx-auto flex flex-col items-center justify-center min-h-screen">
      <PageTitle title="Favaroite Contacts" />
      <ContactList />
    </div>
  );
}

export default App;
