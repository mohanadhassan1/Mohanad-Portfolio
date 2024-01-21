import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./works.scss";
import { FaUserGraduate } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
export default function Works() {
  return (
    <div className="expreience" id="works">
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#f7f0d4", color: "#086899" }}
          className="vertical-timeline-element--work time-item"
          date="2022 - present"
          contentArrowStyle={{ borderRight: "7px solid  #FFF" }}
          iconStyle={{
            background: "#086899",
            color: "#fff",
            marginTop: "4px",
            boxShadow: "none",
            border: "3px solid #fff",
          }}
          icon={<FaLaptopHouse />}
        >
          <h3 className="vertical-timeline-element-title">Full Time Training</h3>
          <h4 className="vertical-timeline-element-subtitle">
            ITI inc.
          </h4>
          <p>
            Performed 100s of code reviews in TypeScript & JavaScript based
            projects for over 50+ junior developers and ensured best coding
            practices.
          </p>
          <p>
            Provide specialized technical advice and guidance to multiple junior 
            developers over 1:1 face-to-face for Fully 100% on-site training.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ color: "#086899" }}
          className="vertical-timeline-element--work time-item"
          date="2010 - 2011"
          iconStyle={{
            background: "#086899",
            color: "#fff",
            marginTop: "4px",
            boxShadow: "none",
            border: "3px solid #fff",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ain Shams University
          </h4>
          <p>
            Study Software Engineer field by taking courses like: • Design
            Pattern • Data Structure • Object-oriented Programming • System Analysis •
            Database, and soon
          </p>
          <p>
            Take intensive training Fullstack MEARN with @ITI organization
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
