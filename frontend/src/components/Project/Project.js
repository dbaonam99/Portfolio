import '../../Styles/Portfolio.css' 
import { useContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { HoverContext } from '../../Contexts/Hover'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

export default function Project(props) {

    const openProject = props.openProject 
    const setOpenProject = props.setOpenProject
    const project= props.project
    const projectBox = useRef()

    const { 
        setHoverFunc
    } = useContext(HoverContext)   

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000, 
        dots: false,
        draggable: true
    } 
    return (
        <div 
            className={openProject ? "project-info project-info-show flex-center" : "project-info flex-center"}
            onClick={(event)=>{ 
                if (event.target.className === "project-info project-info-show flex-center") { 
                    setOpenProject(false)
                    document.body.style.overflow = "unset"
                }
            }} 
            style={{height: `${window.innerHeight}px`}}
        >
            {
                openProject && 
                <div className="project-info-box" ref={projectBox}>
                    <div 
                        className="project-close flex-center"
                        onMouseEnter={()=>{ 
                            setHoverFunc(true)
                        }}
                        onMouseLeave={()=>{ 
                            setHoverFunc(false)
                        }} 
                        onClick={()=>{
                            setOpenProject(false)
                            document.body.style.overflow = "unset"
                            console.log("vheck")
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} className="icon"/>
                    </div>
                    <div className="project-info-title">{project.projectName}</div>
                    <div className="project-info-row">
                        <div className="project-info-row-title">
                            Features
                        </div>
                        <ul className="project-info-row-text">
                            { project.projectFeatures.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })} 
                            <li>...</li> 
                        </ul>
                    </div>
                    <div className="project-info-row">
                        <div className="project-info-row-title">
                            Technical Sheet
                        </div>
                        <ul className="project-info-row-text">
                            { project.projectTech.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })} 
                            <li>...</li> 
                        </ul>
                    </div>
                    <div className="project-info-row">
                        <div className="project-info-row-title">
                            Resources
                        </div>
                        <ul className="project-info-row-text">
                            <li>The project is online at <a href="https://www.facebook.com/dbaonam99" rel="noopener noreferrer" target="_blank">xvideos</a></li>
                            <li>Access the project's source on <a href="https://www.facebook.com/dbaonam99" rel="noopener noreferrer" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                    <Slider {...settings}> 
                        { project.projectImg.map((item, index) => { 
                            return (
                                <div key={index} className="project-info-img flex-center">
                                    <img src={item} alt=""></img>
                                </div> 
                            )})
                        }
                    </Slider>
                    <div className="project-info-list">

                    </div>
                </div>
            }
        </div>
    )
}