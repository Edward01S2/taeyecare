import React from "react";
import { StaticQuery, graphql } from "gatsby";

class Hours extends React.Component {
  render () {
    return (
      <table className={`border-collapse text-sm ${this.props.classes}`}>
        <tbody>
          <tr>
            <td>Monday</td>
            <td className="text-right">{this.props.hours.monday}</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td className="text-right">{this.props.hours.tuesday}</td>
          </tr>
          <tr>
            <td className="pr-4">Wednesday</td>
            <td className="text-right">{this.props.hours.wednesday}</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td className="text-right">{this.props.hours.thursday}</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td className="text-right">{this.props.hours.friday}</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td className="text-right">{this.props.hours.saturday}</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td className="text-right">{this.props.hours.sunday}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query HoursQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "site-page" } }) {
        frontmatter {
          settings {
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
        }
      }
    }
    `}
    render={(data) => (
      <Hours hours={data.markdownRemark.frontmatter.settings} />
    )}
  />
)

