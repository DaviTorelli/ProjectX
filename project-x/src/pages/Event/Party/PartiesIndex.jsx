import React, { useState } from "react";
import { NoDataFound } from "src/components/alerts/NoDataFound";
import { IndexSideButton } from "src/components/buttons/IndexSideButton";
import { IndexHeader } from "src/components/indexes/IndexHeader";

function PartiesIndex() {
  const [parties, setParties] = useState();
  return (
    <React.Fragment>
      <IndexHeader
        title={"Eventos"}
        description={"Controle seus eventos por esse painel."}
      />
      <section className="h-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="row justify-content-center w-100">
            {/* <Link className="text-decoration-none" to={"/parties/create"}>
              <IndexSideButton title={"Adicionar"} />
            </Link> */}
            <div className="col-12">
              <div
                className="card"
                style={{
                  background: "rgba(24, 24, 16, .2)",
                  borderRadius: "2em",
                  backdropFilter: "blur(25px)",
                  border: "2px solid rgba(255, 255, 255, 0.05)",
                  backgroundClip: "padding-box",
                  boxShadow: "10px 10px 10px rgba(46, 54, 68, 0.03)",
                }}
              >
                <div className="card-body">
                  {parties && (
                    <div className="table-responsive">
                      <table className="table table-borderless text-white mb-0">
                        <thead>
                          <tr>
                            <th scope="col">CEP</th>
                            <th scope="col">CIDADE</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">AÇÕES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">124</th>
                            <td>city</td>
                            <td>SP</td>
                            <td>ICONS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {!parties && <NoDataFound />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default PartiesIndex;
