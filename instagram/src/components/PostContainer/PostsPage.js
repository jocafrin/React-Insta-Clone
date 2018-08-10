import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./Post.js";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      commentField: "",
      liked: false
    };
  }
  componentDidMount() {
    this.setState({ postList: dummyData });
  }

  updateCommentField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleLikes = user => {
    let newLike = [user.likes];

    if (this.state.liked === false) {
      newLike++;
      this.setState({ [user.likes]: newLike});
      this.setState({ liked: true });


    } else {
      newLike--;
      this.setState({ [user.likes]: newLike});
      this.setState({ liked: false });

    }
    console.log(newLike)
  };

  submitNewComment = (event, timestamp) => {
    event.preventDefault();
    const newPostList = this.state.postList.map(eachPost => {
      if (eachPost.timestamp === timestamp) {
        eachPost.comments.push({
          username: "jdfvr",
          text: this.state.commentField
        });
      }
      return eachPost;
    });
    this.setState({ postList: newPostList, commentField: "" });
  };

  render() {
    return (
      <div className="App">
        <PostContainer
          addLike={this.toggleLikes}
          postList={this.state.postList}
          submitNewComment={this.submitNewComment}
          updateCommentField={this.updateCommentField}
          commentField={this.props.commentField}
        />
      </div>
    );
  }
}

export default PostsPage;
