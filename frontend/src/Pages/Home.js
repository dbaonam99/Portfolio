import '../Styles/Home.css'  
import { withRouter } from 'react-router-dom';  
import BackgroundLine from '../components/Layouts/BackgroundLine';
import LoadingChild from '../components/Layouts/LoadingChild';  
import { useEffect, useRef, useState } from 'react' 
import Div100vh from 'react-div-100vh';  
import Typist from 'react-typist';

function Home(props) {   

    const home = useRef()  

    const [loadingChild, setLoadingChild] = useState(true)

    useEffect(()=>{    
        window.scrollTo(0, 0) 
        document.body.style.overflow = "hidden" 
        setTimeout(()=>{ 
            setLoadingChild(false)
            document.body.style.overflow = "unset" 
        }, 2000) 
    }, [])    
    

    return (
        <Div100vh 
            className="Home"
            ref={home}
        >    
            <LoadingChild
                loadingChild={loadingChild}
            />
            <BackgroundLine/> 
            <div className="home-container flex">
                <div className="home-avt" style={{backgroundImage: 'url(https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/139862374_2922850601371792_6711855358401197181_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=aq14HCKSn5YAX_GTd6a&_nc_ht=scontent.fsgn3-1.fna&oh=fc7494ce8ac68b2e5712734a02ea8ce3&oe=602BF504)'}}/>
                <div className="home-hello flex">
                    <p>Hello, I’m <strong>Duong Bao Nam</strong>, a third year student at the University of Information Technology.</p>
                </div>
                <div className="home-intro flex">
                    <div className="home-contact flex-col">
                        <span>Email: <a href = "mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a></span>
                        <p>Phone: 0948147259</p>
                    </div>
                    <span className="home-writer flex-center">
                        <Typist avgTypingDelay={40}>
                            <Typist.Delay ms={2000}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                            <p className="react-typewriter-text">I'm <strong>front-end</strong> developer</p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={24} delay={500}/>
                            <p className="react-typewriter-text">I code cool <strong>websites</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={21} delay={500}/>
                            <p className="react-typewriter-text">I love <strong>javascript</strong></p> 
                            <Typist.Delay ms={500}/> 
                            <Typist.Backspace count={18} delay={500}/>
                            <p className="react-typewriter-text">I live in <strong>HCM City</strong></p>  
                            <Typist.Delay ms={500}/>
                            <Typist.Backspace count={19} delay={500}/>
                        </Typist>   
                    </span>
                </div> 
            </div> 
        </Div100vh>
    )
}
export default withRouter(Home)