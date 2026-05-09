import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fanshawe College, Canada
          </h3>
          <p> Completed Graduate Certificate in Computer Systems</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Curtin University, Australia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            BSc in Computer Science
          </h4>

          <p> Completed BSc in Computer Science specialization in Software Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Lanka Institute of Information Technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Diploma
          </h4>

          <p> Higher National Diploma in Computing</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Maris Stella College, Sri Lanka
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
              General Certificate of Education (GCE) Advanced Level(High School)
          </h4>

          <p> Completed High school with Advance level in Sri Lanka.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St Peter's College, Sri Lanka, Negombo
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
              General Certificate of Education (GCE) Ordinary Level(Primary & Secondary School)
          </h4>

          <p> Completed Primary and Secondary School in Sri Lanka.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Stuwards -Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Negombo, Sri Lanka
          </h4>
          <p>Work as a Web Developer at Data Stuwards.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2025 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            H&G Powder Paints, Canada
          </h4>
          <p>
            Working as a Data Analyst at H&G Powder Paints, Canada. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
