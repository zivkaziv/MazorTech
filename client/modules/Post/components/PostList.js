import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';
import styles from '../../../css/prog-tracker.css';

import StepZilla from 'react-stepzilla';

//Steps
import Step1 from '../../Wizard/Steps/StepNumber1'
import Step2 from '../../Wizard/Steps/StepNumber2'
import Step3 from '../../Wizard/Steps/StepNumber3'
import Step4 from '../../Wizard/Steps/StepNumber4'


function PostList(props) {
  const steps =
  [
    {name: 'Diagnosis', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
    {name: 'Info', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
    {name: 'Terms', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
    {name: 'Rights', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
  ];


  return (
    <div className="listView">
      <div className='step-progress'>
        <StepZilla steps={steps}/>
      </div>
      {/*{*/}
        {/*props.posts.map(post => (*/}
          {/*<PostListItem*/}
            {/*post={post}*/}
            {/*key={post.cuid}*/}
            {/*onDelete={() => props.handleDeletePost(post.cuid)}*/}
          {/*/>*/}
        {/*))*/}
      {/*}*/}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
