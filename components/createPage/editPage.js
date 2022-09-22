import { Layout } from 'antd';
import React from 'react';
import NavBar from './navBar';
import EditTags from './editTags';
import EditTitle from './editTitle';
import UploadPhoto from './uploadPhoto';
import AddIngredients from './addIngredients';
import AddMethod from './addMethods';
import classes from './editPage.module.css';


const { Header, Content, Footer } = Layout;

function EditPage() {
  return (

    <Layout>

      <Header className={classes.header}>
        <NavBar />
      </Header>

      <Content className={classes.content}>
        <div>
          <div className={classes.components}>
          {/* iphone */}
            <UploadPhoto /> 
            <EditTitle />
          </div>
          <div>
            <EditTags />
          </div>
          <div className={classes.ingredients}>
            <AddIngredients/>
          </div>
          <div className={classes.methods}>
            <AddMethod/>
          </div>
        </div>
      </Content>

      <Footer className={classes.footer}>
      
      </Footer>


    </Layout>


  );
}

export default EditPage;
