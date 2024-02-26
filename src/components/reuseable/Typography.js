export default function Typography({
  children,
  className,
  variant = "subtitle",

}) {
  if (variant === "h1") {
    return (
      <h1
        className={`font-instrument sm:text-5xl text-3xl text-gray-900  ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (variant === "h2") {
    return (
      <h3
        className={`font-instrument sm:text-7xl text-5xl text-gray-900  ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === "h3") {
    return (
      <h3
        className={`font-instrument sm:text-4xl text-4xl text-gray-900  ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === "h5") {
    return (
      <h1
        className={`sm:text-2xl text-lg      ${className}`}
      >
        {children}
      </h1>
    );
  }

  if (variant === "body") {
    return (
      <h1
        className={` sm:text-lg text-md   ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (variant === "sub") {
    return (
      <h1
        className={`font-normal sm:text-md text-xs  ${className}`}
      >
        {children}
      </h1>
    );
  }
}
