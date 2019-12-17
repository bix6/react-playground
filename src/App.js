import React from 'react';
import Tabs from './state/Tabs';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends React.Component {
  render () {
    return <div>
      <Tabs tabs={tabsProp} />
    </div>
  }
}

export default App;

/*
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

const firstTooltip = (
  <Tooltip color='hotpink' message="tooltip message">
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message="another tooltip message">
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Counter count={123} step={5}/>
      <TheDate />
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
      <Split className='left' flexBasis={2}>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
*/