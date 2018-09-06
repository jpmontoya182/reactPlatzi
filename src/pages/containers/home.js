import React, {Component} from 'react';

import HomeLayout from '../components/home-layout';
import RelatedLayout from '../components/related-layout'
import Categories from '../../categories/components/categories'

import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'

class Home extends Component {   
    state = {
        modalVisible : false,
    } 

    handleOpenModal =() =>{
        this.setState({
            modalVisible: true
        })
    }

    handleCloseModal =() =>{
        this.setState({
            modalVisible: false
        })
    }

    render(){     
        return (            
            <HomeLayout> 
                <RelatedLayout /> 
                <Categories 
                    categories={this.props.data.categories} 
                    handleOpenModal={this.handleOpenModal}
                />  
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal
                            handleClick={this.handleCloseModal}
                        >
                            <h1>Esto es un portal</h1>
                        </Modal>
                    </ModalContainer>
                }               
            </ HomeLayout>   
        )
    }
}

export default Home