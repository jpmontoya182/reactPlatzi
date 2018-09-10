import React, {Component} from 'react';

import HomeLayout from '../components/home-layout';
import RelatedLayout from '../components/related-layout'
import Categories from '../../categories/components/categories'

import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError  from '../../errores/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {   
    state = {
        modalVisible : false
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
            <HandleError>       
                <HomeLayout> 
                    <RelatedLayout /> 
                    <VideoPlayer 
                        autoplay
                    />
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
            </HandleError>  
        )
    }
}

export default Home