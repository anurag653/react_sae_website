import React, { useEffect, useState } from 'react';
import img1 from './assets/4.jpg';
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'

const images = [
  img1, img2, img3, img4,

];
const facultyMembers = [
  {
    name: 'anurag singh',
    designation: 'computer science',

    bio: 'expert in artificial intelligence and machine learning',
  },
  {
    name: 'vishal singh',
    designation: 'mechanical engineering',

    bio: 'robotics',
  },
  {
    name: 'astha ojha',
    designation: 'electronics engineering',

    bio: 'expert in technology',
  },
  {
    name: 'prashant gupta',
    designation: 'electrical engineering',

    bio: 'expert in renewable energy',
  },

];

const courses = [{ id: 1, name: 'intro to physics', department: 'bridgekriti', description: 'basic physics' },
{ id: 2, name: 'el tiro', department: 'vinci', description: 'basic science' },
{ id: 3, name: 'intro to history', department: 'initio', description: 'overview of history' },
{ id: 4, name: 'el tiro', department: 'tiro', description: 'basic science' },
{ id: 5, name: 'el tiro', department: 'cadathon', description: 'basic science' },
];

function App() {
  const [currentindex, setcurrentindex] = useState(0);
  const [form, setform] = useState({ name: '', email: '', course: '' })
  const [submitted, setsubmitted] = useState(false)
  const [selecteddepartment, setselecteddepartment] = useState('');

  const [displayedcourses, setdisplayedcourses] = useState(courses);


  const featuredcontent = [
    {
      title: 'welcome',
      description: 'ab-initio',
      imageUrl: img1,
    },
    {
      title: 'welcome',
      description: 'cadathhon',
      imageUrl: img2,
    },

    {
      title: 'welcome',
      description: 'eltiro',
      imageUrl: img3,
    },
  ];

  const [currentslide, setcurrentslide] = useState(0);

  useEffect(() => {
    const slideinterval = setInterval(() => {
      setcurrentslide((prevslide) => (prevslide + 1) % featuredcontent.length);
    }, 1000);
    return () => clearInterval(slideinterval);

  }, []);
  const news = [
    {
      title: 'college fest 2024',
      date: 'december ,2024',
      description: 'join us for the college fest with lots of events and programs.'
    },
    {
      title: 'events dates',
      date: 'december,2023',
      description: 'events date announcement '
    },
    {
      title: 'prize distribution',
      date: 'december,2023',
      description: 'prize distribution date announcement '
    },
  ]

  const gotoprevious = () => {
    if (currentindex === 0) {
      setcurrentindex(images.length - 1);
    }
    else {
      setcurrentindex(currentindex - 1);
    }
  }
  const gotonext = () => {
    if (currentindex === images.length - 1) {
      setcurrentindex(0);
    }
    else {
      setcurrentindex(currentindex + 1);
    }
  }
  const handleinputchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.course) {

      setsubmitted(true)

      setform({ name: '', email: '', course: '' })
    }
    else {
      alert('Please Fill Out All Fields')
    }
  };
  const handledepartmentchange = (e) => {

    const department = e.target.value;
    setselecteddepartment(department);
    if (department === 'tiro') {

      // setdisplayedcourses(courses);
    }
    else {
      setdisplayedcourses(courses.filter(courses => courses.department === department));
    }
  };



  // console.log(currentslide)
  // console.log(setcurrentslide);
  // console.log(featuredcontent.imageUrl);
  return (
    <div>

      {/* header section */}

      <header style={styles.header}>
        <h1 style={styles.logo}><img src="" alt="" /><u>Society of Automotive Engineers</u></h1>
        <nav>
          <ul style={styles.navlinks}>
            <li><a href="#home" style={styles.navlink}>Home</a></li>
            <li><a href="#About" style={styles.navlink}>About</a></li>
            <li><a href="#Contact" style={styles.navlink}>Contact</a></li>

          </ul>
        </nav>
      </header>
      {/* main section ka code */}
      <section id='home' style={styles.main}>
        <h2 style={styles.maintext}>
          Welcome to Our Society
        </h2>
        <p style={styles.maintexts}>Welcome to the Society of Automotive Engineers .</p>
      </section>

      {/* faculty members ka code */}
      <section style={styles.carousel}>
        {featuredcontent.map((content, index) => (

          <div key={index}
            style={{
              ...styles.carouselitem, opacity: index === currentslide ? 1 : 0, transform: index === currentslide ? 'translateX(0)' : 'translateX(100%)',

            }}
          >
            <img src={content.imageUrl} alt={content.title}
              style={styles.carouselimage} />
            <div style={styles.carouselcontent}>
              <h2 style={styles.carouseltitle}>{content.title}</h2>
              <p style={styles.carouseldescription}>{content.description}</p>
            </div>

          </div>
        ))}
      </section>

      {/*  image ka code */}
      <section style={styles.imagesection}>
        <h2 >Our Events</h2>
        <div style={styles.imagecontainer}>
          <div>
            <img src={images[currentindex]} alt="image" style={styles.image} />
          </div>
          <button onClick={gotoprevious} style={{ ...styles.button, ...styles.buttonLeft }}>Previous</button>
          <button onClick={gotonext} style={{ ...styles.button, ...styles.buttonRight }}>Next</button>
        </div>
      </section>
      {/* student register for events ka code*/}
      <section id='register' style={styles.formsection}>
        <h2>Student registration form for events participation</h2>
        {submitted ? (
          <p style={styles.successmessage}>Registration Successful!</p>
        ) : (

          <form onSubmit={handlesubmit} style={styles.form}>
            <input type="text"
              name='name'
              placeholder='Name'
              value={form.name}
              onChange={handleinputchange}
              style={styles.input}
            />
            <input type="email"
              name='email'
              placeholder='Email'
              value={form.email}
              onChange={handleinputchange}
              style={styles.input}
            />
            <input type="text"
              name='course'
              placeholder='Course'
              value={form.course}
              onChange={handleinputchange}
              style={styles.input}
            />
            <button type="submit" style={styles.submitbutton}>Register</button>
          </form>
        )}

      </section>

      <br /><br />

      {/* event selection ka code */}
      <section id='courses' style={styles.coursesection}>
        <h2>Events Information</h2>

        <label htmlFor="">

          events:
          <select name="" value={selecteddepartment} onChange={handledepartmentchange} style={styles.select} id="">
            {/* <option value="All">all</option> */}
            <option value="bridgekriti">bridgekriti</option>
            <option value="vinci">da vinci</option>
            <option value="initio">ab-initio</option>
            <option value="tiro">el tiro</option>
            <option value="cadathon">cadathon</option>

          </select>
        </label>

        <div style={styles.courselist}>
          {displayedcourses.map(course => (
            <div key={course.id} style={styles.coursecard}>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <p><strong>department:</strong>{course.department}</p>
            </div>
          ))}
        </div>
      </section>
      {/* members of sae */}
      <div style={styles.facultysection}>
        <h2 style={styles.sectiontitle}>meet our members</h2>
        <div style={styles.facultylist}>
          {facultyMembers.map((member, index) => (
            <div key={index} style={styles.facultycard}>
              <h3 style={styles.facultyname}>{member.name}</h3>
              <p style={styles.facultydesignation}>{member.designation}</p>
              <p style={styles.facultybio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>


      {/* events news */}
      {/* <EventsSection events={news} /> */}


      <footer style={styles.footer}>
        <p>2024 Madan Mohan Malviya. All rights reserved.</p>
        <div style={styles.socialmedia}>
          <a href="#" style={styles.sociallink}>facebook</a>
          <a href="#" style={styles.sociallink}>twitter</a>
          <a href="#" style={styles.sociallink}>instagram</a>
        </div>
      </footer>




    </div>


  )
}


const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  facultysection: {
    marginTop: '50px',
    padding: '20px',

    backgroundColor: '#f0f4c3',
    borderRadius: '8px',
    boxshadow: '0px 4px 8px rgba(0,0,0,0.1)',
  },

  carousel: {
    position: 'relative',
    width: '100%',

    height: '400px',

    overflow: 'hidden',
    marginBottom: '40px',

    borderRadius: '8px',

    boxshadow: '0px 4px 8px rgba(0,0,0,0.1)',
  },
  carouselitem: {
    position: 'relative',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease-in-out',
  },
  carouselimage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  carouselcontent: {
    position: 'absolute',
    bottom: '20px',

    left: '20px',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '10px 20px',
    borderRadius: '4px',
  },
  carouseltitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  carouseldescription: {
    fontSize: '16px',
  },

  sectiontitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },

  facultylist: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  facultycard: {
    maxWidth: '300px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxshadow: '0px 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  facultyname: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  facultydesignation: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: '10px',
  },
  facultybio: {
    fontSize: '14px',
    // fontWeight:'bold',
    color: '#555',
  },
  logo: {
    fontSize: '2.5rem',

  },
  navlinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,

  },
  navlink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '1.5rem',
  },
  main: {
    height: '60vh',
    background: 'url() center/cover no-repeat',
    color: 'rgb(26, 29, 31)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  maintext: {
    fontSize: '2.5rem',

    margin: '0',

  },
  maintexts: {
    fontSize: '1.8rem',
    marginTop: '10px',
    color: 'black',
  },
  imagesection: {
    padding: '50px 0',
    textAlign: 'center',


  },
  imagecontainer: {
    position: 'relative',
    width: '800px',
    margin: '0 auto',
    textAlign: 'center',


  },

  image: {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.5s ease-in-out',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgb(30, 33, 35)',

    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '1.5rem'
  },
  buttonLeft: {
    left: '10px',
  },
  buttonRight: {
    right: '10px',


  },
  formsection: {
    padding: '20px',
    border: '5px solid rgb(49, 58, 66)',
    textAlign: 'center',
    width: 'fit-content',

    // minWidth: '800px',
    // alignItems: 'center',

    margin: '0 auto',
    // padding: '20px',
    minWidth: '800px',
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',

    // borderBlockWidth:'20px',
    // justifyContent:'center',
  },
  form: {
    // border:'5px solid rgb(49, 58, 66)',
    // display:'flex'
    // width:'fit-content',
    margin: '0 auto',
    padding: '20px',
    minWidth: '800px',
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',

  },
  input: {

    padding: '10px',
    margin: '10px 0',
    width: '80%',
    maxWidth: '400px',
    fontSize: '16px',


  },
  submitbutton: {
    padding: '10px 20px',
    fontSize: '26px',
    cursor: 'pointer',
    backgroundColor: '#ccc',
    // color:'#fff'
    border: 'none',
    borderRadius: '15px',

  },
  successmessage: {
    fontSize: '40px',
    color: 'green',

  },
  courselist: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  coursesection: {
    padding: '40px 20px',
    backgroundColor: '#f1f1f1',
  },
  select: {
    margin: '20px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  coursecard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxshadow: '0 4px 8px rgba(0,0,0,0.1)',

    margin: '10px',
    padding: '20px',

    width: 'calc(33% - 40px)',
    boxSizing: 'border-box',
    textAlign: 'center',
  },



  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',

    marginTop: '20px',
  },
  socialmedia: {
    marginTop: '10px',
  },

  sociallink: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
  },
};


export default App