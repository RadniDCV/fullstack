import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function Lesson01() {
  return (
    <div>
      <h1>A-An</h1>
      <Table>
        <thead>
          <tr>
            <th>a</th>
            <th></th>
            <th>an</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a cat</td>
            <td>a dog</td>
            <td>an elephant</td>
            <td>an octopus</td>
          </tr>
        </tbody>
      </Table>
      <p>
        a + consonant (b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x,
        y, z)
        <br />
        an + vowel sound (a, e, i, o, u)
      </p>
    </div>
  );
}

export default Lesson01;
