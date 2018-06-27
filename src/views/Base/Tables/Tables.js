import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Simple Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date Joined</th>
                      <th>Role</th>
                      <th>DoB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>2012/02/01</td>
                    </tr>
                    <tr>
                      <td>Estavan Lykos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>2012/02/01</td>
                    </tr>
                    <tr>
                      <td>Chetan Mohamed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>2012/02/01</td>
                    </tr>
                    <tr>
                      <td>Derick Maximinus</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>2012/02/01</td>
                    </tr>
                    <tr>
                      <td>Friderik Dávid</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>2012/02/01</td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button" />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button" />
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tables;
