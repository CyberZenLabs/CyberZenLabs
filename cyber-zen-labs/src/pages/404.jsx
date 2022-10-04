import React, { useContext, useEffect } from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  GrifContentSC,
  H1TitleSC,
  DivTextContentSC,
  GridTextSC,
  H1TitleColumnsSC,
  H1TitleTextSC,
  DivBodyTextSC,
} from "../styled-components-css/styled-404";
import GlobalDispatchContext from "../global_dispatch_context";

const Page_404 = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage } = state;

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "none",
      });
    };
  }, [isPage]);

  return (
    <DivWrapSC>
      <DivContainerSC>
        <GrifContentSC>
          <GridTextSC>
            <DivTextContentSC>
              <H1TitleColumnsSC>
                <H1TitleSC>404</H1TitleSC>
                <H1TitleTextSC>Not Found</H1TitleTextSC>
              </H1TitleColumnsSC>
              <DivBodyTextSC>
                The requested URL was not found on this server. That's all we
                know
              </DivBodyTextSC>
            </DivTextContentSC>
          </GridTextSC>
        </GrifContentSC>
      </DivContainerSC>
    </DivWrapSC>
  );
};

export default Page_404;
