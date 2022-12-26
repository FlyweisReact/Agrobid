import React from 'react'

const Buyer = () => {
    return (
        <>
          <section>
            <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
              <span className="tracking-widest text-slate-900 font-semibold uppercase ">
                All Users
              </span>
            </div>
          </section>
          <Table
            striped
            bordered
            hover
            style={{
              marginTop: "5%",
              scrollBehavior: "smooth",
              overflow: "scroll",
            }}
          >
            <thead>
              <tr>
                <th>Image</th>
                <th> Name </th>
                <th>trade Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img src={i.image} alt="" className="fast-food" />
                  </td>
                  <td> {i.name} </td>
                  <td> {i.tradeName} </td>
                  <td> {i.email} </td>
                  <td> {i.phone} </td>
                  <td> {i.location} </td>
                  <td> {i.role} </td>
    
                  <td>
                    <AiFillDelete
                      color="red"
                      cursor="pointer"
                      onClick={() => {
                        toast.success("User Deleted Successfully");
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      );
    };

export default Buyer