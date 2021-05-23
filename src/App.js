import ScreenHeader from './ScreenHeader'
import MenuIcon from '@material-ui/icons/MenuRounded';
import DogFace from './custom-svgs/dog-face.svg'
import AddCircleIcon from '@material-ui/icons/AddCircleRounded';

function App() {
  return (
    <div className="app">
      <ScreenHeader left={MenuIcon} right={AddCircleIcon} />
    </div>
  );
}

export default App;
