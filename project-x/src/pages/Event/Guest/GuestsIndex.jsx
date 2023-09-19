import * as Icon from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoDataFound } from "src/components/alerts/NoDataFound";
import { IndexSideButton } from "src/components/buttons/IndexSideButton";
import { DeleteIcon } from "src/components/buttons/TableIcons/DeleteIcon";
import { EditIcon } from "src/components/buttons/TableIcons/EditIcon";
import { IndexHeader } from "src/components/indexes/IndexHeader";
import { destroyGuest, indexGuests } from "src/services/api/guestServices";
import Swal from "sweetalert2";

function GuestsIndex() {
  const [guests, setGuests] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    getData();
  }, [deleted]);

  const getData = async () => {
    await indexGuests().then((response) => setGuests(response.guests));
  };

  const deleteItem = async (item) => {
    await destroyGuest(item).then((response) => {
      setDeleted(!deleted);
      return;
    });
  };

  const showAlert = (item) => {
    Swal.fire({
      title: "Atenção",
      text: "Deseja mesmo deletar esse usuário? Essa ação é irreversível",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(item);
      }
    });
  };

  return (
    <React.Fragment>
      <IndexHeader
        title={"Pessoas"}
        description={"Cadastre as pessoas e convide-as para a festa."}
      />
      <section className="h-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="row justify-content-center w-100">
            <Link className="text-decoration-none" to={"/guests/create"}>
              <IndexSideButton title={"Adicionar"} />
            </Link>
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
                  {guests.length > 0 && (
                    <div className="table-responsive">
                      <table className="table table-borderless text-white mb-0">
                        <thead>
                          <tr>
                            <th scope="col">nome</th>
                            <th scope="col">telefone</th>
                            <th scope="col">ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {guests.map((item, id) => (
                            <tr key={id}>
                              <th scope="row">{item.name}</th>
                              <td>{item.phone}</td>
                              <td>
                                <EditIcon id={item.id} />
                                <DeleteIcon
                                  id={item.id}
                                  deleteItem={showAlert}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {!guests && <NoDataFound />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default GuestsIndex;
