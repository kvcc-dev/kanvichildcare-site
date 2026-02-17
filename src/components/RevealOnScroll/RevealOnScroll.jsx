import useInView from "../../hooks/useInView";

const RevealOnScroll = ({ children, delay = 150 }) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      className={`
        transition-all duration-700 ease-out
        opacity-0 translate-y-6
        ${isVisible ? "opacity-100 translate-y-0" : ""}
        motion-reduce:opacity-100 motion-reduce:translate-y-0
      `}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;