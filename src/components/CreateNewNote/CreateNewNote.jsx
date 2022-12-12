import { Component } from 'react';
import { create } from '../../utilities/notes-api';

export default class CreateNewNote extends Component {
    state = {
        content: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        const {content} = this.state;
        const formData = {content};
        const user = await create(formData);
      } catch {
        this.setState({ error: 'Failed to Create Note - Try Again' });
      }
  };

  render() {
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Note</label>
            <input type="text" name="content" value={this.state.content} onChange={this.handleChange} required />
            <button type="submit">Add Note</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}