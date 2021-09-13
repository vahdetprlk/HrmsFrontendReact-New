import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";
import { applyToJobAdvert } from "../store/actions/jobAdvertActions";


export default function JobAdvertList() {

  const dispatch = useDispatch()


  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()

    jobAdvertService.getJobAdvert().then((result) => setJobAdverts(result.data.data));
  }, []);


  const handleApplyToJobAdvert  =(jobAdvert)=>{
    dispatch(applyToJobAdvert(jobAdvert));
    
    

  }


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>Yer</Table.HeaderCell>
            <Table.HeaderCell>Maaş Bilgisi</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell><Link to={`/job-adverts/${jobAdvert.id}`}>{jobAdvert.jobPosition.name}</Link></Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>
                {jobAdvert.salaryMin + " - " + jobAdvert.salaryMax}
              </Table.Cell>
              <Table.Cell>{jobAdvert.openPositionQty}</Table.Cell>
              <Table.Cell><Button onClick={()=>handleApplyToJobAdvert(jobAdvert)}>Başvuru Yap</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
