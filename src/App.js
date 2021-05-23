import CustomSvg from './CustomSvg'

import DogFace from './custom-svgs/dog-face.svg'
import AssignmentIcon from '@material-ui/icons/Assignment';

function App() {
  return (
    <div className="app">
      <CustomSvg icon={DogFace} />
      <CustomSvg icon={AssignmentIcon} />
    </div>
  );
}

export default App;
