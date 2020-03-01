import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pagination extends Component {
  render() {
    return (
      <div>
        {this.props.firstPage === 1 &&
        this.props.currPage === 1 &&
        this.props.lastPage === 1 ? null : (
          <div className="partner-pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {this.props.firstPage ? (
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      1
                    </Link>
                  </li>
                ) : null}
                {this.props.prevPage ? (
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      {this.props.prevPage}
                    </Link>
                  </li>
                ) : null}
                <li className="page-item active">
                  <Link className="page-link " to="/">
                    {this.props.currPage}
                  </Link>
                </li>
                {this.props.nextPage ? (
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      {this.props.nextPage}
                    </Link>
                  </li>
                ) : null}
                <li className="page-item">
                  <Link className="page-link" to="/">
                    {this.props.lastPage}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default Pagination;
