
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,} from 'react-native';
import SomeComponent from "./Components/SomeComponent/SomeComponent.js"
// import Demo from "./Components/Picker/Picker.js"


export default class App extends Component {

  state = {
    swipeState: null,
    currentName:null,
    currentImage: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
  }

componentWillMount(){}

componentDidMount() {
  fetch("https://api.yelp.com/v3/businesses/search?term=food&radius=16093&location=oakland", {
    method: "GET",
    headers: new Headers({
      "Content-type": "application/json",
      'Authorization': ' Bearer ' + "EgNHeojg_ryrKUYzlgCaPMXU7i60GOR-Yy1qxnoYvIDNM8OEq1bfq1a5cbuiExw94-oDF86cKIGfZI73iQoXsxZYndshHdSCeqUMjCi1C-KqdY1jA2Rkw5O4OQWwWnYx",
    }),

  })
    .then(response => response.json())
    .then(info => {
       let holder = info;
      this.setState(() => ({
        currentImage: info['businesses'][0]['image_url'],
        currentName: info['businesses'][0]['name']
      }));
      this.pushIntoDB(holder)
      
    });
}

pushIntoDB=(holder)=>{  
  for(item in holder){
    console.log(item)
  }

  fetch('http://localhost:8080/data/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(holder),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Got this back', data);

      // Redirect to blog
      this.props.history.push('/data/');
    });

}


onChangeHandler=(differ)=>{
  console.log("is this you",differ)
  this.setState(() => ({
     swipeState: differ,
     currentName:"simon"
  }));
}

  render() {
    let currentImageMarker =  this.state.currentImage;
    if (this.state.currentImage){
      currentImageMarker = this.state.currentImage
    }


  
    return (
      <View style={styles.container}> 
          <Text>stars</Text>
          <Text>{this.state.currentName}</Text>
          <SomeComponent currentImage={currentImageMarker} updateChange={this.onChangeHandler} />
          {console.log("progress has been made",this.state.swipeState)}
          <Text>Type</Text>
          <Text>Contact</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  position:{
    width:"100%",
    height:450,
    // backgroundColor: "red",
  },
  demo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:30,
    width:100,
  }
});
