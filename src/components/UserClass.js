import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch(
      "https://api.github.com/users/shikharsrivastava1202"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img src={avatar_url} />
        <h2 className="font-bold py-4 text-lg">Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 1202shikhars@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
