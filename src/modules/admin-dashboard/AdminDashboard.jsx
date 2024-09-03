import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar"; // Correct import for bar chart
import Slider from "react-slick";
import { useSpring, animated } from "@react-spring/web";
import SidebarComponent from "../side-bar/Sidebar";
import "tailwindcss/tailwind.css";
import "./admindashboard.css";
import UserTable from "./user-table/UserTable";

// Pie chart data
const pieData = [
  { id: "Text to Image", label: "Text to Image", value: 27 },
  { id: "Image to Text", label: "Image to Text", value: 23 },
  { id: "Image to Image", label: "Image to Image", value: 35 },
];

// Customized theme with Montserrat font
const theme = {
  labels: {
    text: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      fontSize: 16,
    },
  },
};

// Custom colors for the chart
const customColors = { scheme: "pastel2" };

function AdminDashboard() {
  // Spring animation for the chart container
  const containerProps = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 12 },
  });

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[250px] fixed top-0 left-0 h-full shadow-lg bg-[#f3f4f6]">
        <SidebarComponent />
      </div>

      {/* Main Content */}
      <div className="ml-[250px] p-10 bg-white">
        <h1 className="mb-6 text-3xl font-bold text-black admin-labels ">
          Admin Dashboard
        </h1>
        <div className="justify-center mb-10 d-flex align-items-center">
          {/* Carousel with Charts */}
          {/* <Slider {...settings} className="relative"> */}
          {/* Pie Chart */}
          <animated.div
            style={containerProps}
            className="justify-center p-8 bg-gray-100 rounded-lg d-flex align-items-center">
            <div className="mb-4">
              <h1 className="mb-6 text-3xl font-bold text-black form-labels">
                API Usage Distribution
              </h1>
              <p className="mt-2 text-gray-600 button-fonts">
                Overview of the usage of various APIs in the system.
              </p>
            </div>
            <div className="h-[350px] button-fonts relative">
              <ResponsivePie
                data={pieData}
                theme={theme}
                margin={{ top: 30, right: 20, bottom: 40, left: 20 }}
                innerRadius={0.6}
                padAngle={0.7}
                cornerRadius={3}
                colors={customColors}
                borderWidth={2}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsRadiusOffset={0.5}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
              />
            </div>
          </animated.div>

          {/* Donut Chart
            <animated.div style={containerProps} className="p-8 bg-gray-100 rounded-lg">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-black form-labels">
                  API Usage Distribution
                </h2>
                <p className="mt-2 text-gray-600 button-fonts">
                  Overview of the usage of various APIs in the system.
                </p>
              </div>
              <div className="h-[350px] button-fonts relative">
                <ResponsivePie
                  data={pieData}
                  theme={theme}
                  margin={{ top: 30, right: 20, bottom: 40, left: 20 }}
                  innerRadius={0.7} // Different innerRadius for donut effect
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={customColors}
                  borderWidth={2}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsRadiusOffset={0.6} // Adjusted for donut effect
                  arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                />
              </div>
            </animated.div> */}

          {/* Bar Chart */}
          {/* <animated.div style={containerProps} className="p-8 bg-gray-100 rounded-lg">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-black form-labels">
                  API Usage Distribution
                </h2>
                <p className="mt-2 text-gray-600 button-fonts">
                  Overview of the usage of various APIs in the system.
                </p>
              </div>
              <div className="h-[350px] button-fonts relative">
                <ResponsiveBar
                  data={pieData.map(({ id, value }) => ({ country: id, 'API Usage': value }))}
                  keys={['API Usage']}
                  indexBy="country"
                  margin={{ top: 30, right: 20, bottom: 40, left: 60 }}
                  padding={0.3}
                  colors={customColors.scheme}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'API Type',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Usage',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                />
              </div>
            </animated.div> */}
          {/* </Slider> */}
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
