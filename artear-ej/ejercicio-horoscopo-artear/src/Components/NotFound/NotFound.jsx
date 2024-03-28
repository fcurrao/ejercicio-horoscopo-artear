export const NotFound = () => {
    const screenWidth = window.innerWidth * 0.4;  

    return (
        <>
            <div style={{height: screenWidth}} className="bg-light align-content-center fs-4 fw-bold p-5">
               <h2>NO SE ENCONTRARON ELEMENTOS</h2>
            </div>
        </>
    );
};