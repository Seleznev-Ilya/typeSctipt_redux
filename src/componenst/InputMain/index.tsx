// import { stringify } from "querystring";
import React, { useCallback } from "react";
import { connect } from "react-redux";

interface Props {
  dispatch: any;
  placeHolder: string;
  action: (...a: any) => { type: string; payload: string; id?: number };
  // actionArguments?: {
  //   [key: string]: any;
  // };
  actionArguments?: {
    payload: string;
    id: number;
  };
  toggleTitleState?: () => void;
}

const InputMain = ({
  dispatch,
  placeHolder,
  action,
  actionArguments,
  toggleTitleState,
}: Props) => {
  let input: any;
  const initialvalu = actionArguments ? actionArguments.payload : "";

  const submitContent = useCallback((e) => {
    e.preventDefault();
    if (toggleTitleState) toggleTitleState();
    if (!input.value.trim()) {
      return;
    }
    actionArguments
      ? dispatch(action(input.value, actionArguments.id))
      : dispatch(action(input.value));

    input.value = "";
  }, []);

  return (
    <form onSubmit={submitContent}>
      <input
        placeholder={placeHolder}
        ref={(node) => {
          input = node;
          if (node) node.focus();
          if (node) node.value = initialvalu;
        }}
        onBlur={submitContent}
      ></input>
    </form>
  );
};

export default connect()(InputMain);
