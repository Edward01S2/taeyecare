import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
        <section className="section z-10 relative">
          <div className="container mx-auto">
            <div className="content py-8 mx-4 px-8 -mb-8 md:-mb-64 shadow-lg rounded-lg bg-white z-20">
              <h2 className="text-center text-4xl tracking-widest font-semibold text-center uppercase">Get in touch</h2>
              <p className="text-center pb-8 text-gray-700 w-3/4 mx-auto">Leave us a message or call us at <a href={`tel:${this.props.phone}`}>{this.props.formatPhone}</a></p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="block text-gray-700 text-sm font-semibold mb-2 tracking-wide" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="block text-gray-700 text-sm font-semibold mb-2 tracking-wide" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="block text-gray-700 text-sm font-semibold mb-2 tracking-wide" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      rows="5"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="bg-ta-blue hover:bg-ta-300 text-white text-lg font-bold py-2 px-4 rounded" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    )
  }
}
