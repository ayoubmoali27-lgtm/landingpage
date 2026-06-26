import Button from "@mui/material/Button";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for <br /> developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-600 max-w-4xl">
        Empower your creativity and bring your VR app idea to life which our
        intutive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <Button
          size="large"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg, #c02d5e 0%, #c89a47 100%)",
            },
          }}
        >
          Start for free
        </Button>
        <Button
          size="large"
          variant="outlined"
          sx={{
            color: "rgb(82, 82, 82)",
            marginLeft: 2,
            borderColor: "rgb(82, 82, 82)",
            "&:hover": {
              background: "rgb(236, 236, 236)",
            },
          }}
        >
          Documentation
        </Button>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
