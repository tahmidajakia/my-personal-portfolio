const ProjectsCard = ({ project }) => {
  const { _id, name, image, live, link, description, features, technologies } =
    project;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex gap-9 mt-6">
            <div className="card-actions">
              <a href={live} target="_blank">
                <button className="text-cyan-400">View Live Project</button>
              </a>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              View Details
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Features : {features}</h3>
                <p className="py-4">Technologies : {technologies}</p>
                <a href={link} target="_blank">
                  <button className="text-cyan-400">View Code</button>
                </a>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
