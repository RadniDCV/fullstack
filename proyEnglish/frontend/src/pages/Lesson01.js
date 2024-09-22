import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Lesson01() {
  return (
    <div>
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
              <td>
                <img src="/image/cat.jpeg" alt="Cat" />
                <br />a cat
              </td>
              <td>
                <img src="/image/dog.webp" alt="Dog" />
                <br />a dog
              </td>
              <td>
                <img src="/image/elephant.jpeg" alt="Dog" />
                <br />
                an elephant
              </td>
              <td>
                <img src="/image/octopus.jpeg" alt="Dog" />
                <br />
                an octopus
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          a + consonant (b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w,
          x, y, z)
          <br />
          an + vowel sound (a, e, i, o, u)
        </p>
        <Table>
          <tbody>
            <tr>
              <td>a/an biscuit</td>
              <td>a/an cake</td>
              <td>a/an apple</td>
            </tr>
            <tr>
              <td>a/an pineapple</td>
              <td>a/an onion</td>
              <td>a/an tomato</td>
            </tr>
            <tr>
              <td>a/an egg</td>
              <td>a/an lemon</td>
              <td>a/an orange</td>
            </tr>
            <tr>
              <td>a/an watermelon</td>
              <td>a/an olive</td>
              <td>a/an sandwich</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Lesson01;
