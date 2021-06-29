import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";
export default function AppliedJobAdvertList() {

    const {appliedJobAdverts} = useSelector(state => state.appliedJobAdverts)

  return (
    <div>
      <Table celled>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Başvurulan İlanlar</Table.HeaderCell>
            </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>Yer</Table.HeaderCell>
            <Table.HeaderCell>Maaş Bilgisi</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {appliedJobAdverts.map((appliedJobAdvert) => (
            <Table.Row key={appliedJobAdvert.jobAdvert.id}>
              <Table.Cell>
                <Link to={`/job-adverts/${appliedJobAdvert.jobAdvert.id}`}>
                  {appliedJobAdvert.jobAdvert.jobPosition.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{appliedJobAdvert.jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{appliedJobAdvert.jobAdvert.city.name}</Table.Cell>
              <Table.Cell>
                {appliedJobAdvert.jobAdvert.salaryMin + " - " + appliedJobAdvert.jobAdvert.salaryMax}
              </Table.Cell>
              <Table.Cell>{appliedJobAdvert.jobAdvert.openPositionQty}</Table.Cell>
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
