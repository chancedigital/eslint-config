import React from "react";

const CoolButton = () => {
	return (
		<button>
			Cool{" "}
			<span role="img" aria-label="cool graphic">
				🆒
			</span>
		</button>
	);
};

function CoolButtonFunc() {
	return (
		<button>
			Cool{" "}
			<span role="img" aria-label="cool graphic">
				🆒
			</span>
		</button>
	);
}

const CoolButtonWithRef = React.forwardRef((_, ref) => {
	return (
		<button ref={ref}>
			Cool{" "}
			<span role="img" aria-label="cool graphic">
				🆒
			</span>
		</button>
	);
});
// Should require a displayName when using forwardRef!
CoolButtonWithRef.displayName = "CoolButtonWithRef";

export { CoolButtonWithRef, CoolButtonFunc };
export default CoolButton;
