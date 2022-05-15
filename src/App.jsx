import { useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <h1 className="title">Inputs</h1>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input /&gt;</pre>
          <Input />
        </div>
        <div>
          <pre className="input-tag">&#38;:hover</pre>
          <Input onHover />
        </div>
        <div>
          <pre className="input-tag">&#38;:focus</pre>
          <Input onFocus />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input error /&gt;</pre>
          <Input error />
        </div>
        <div>
          <pre className="input-tag">&#38;:hover</pre>
          <Input error onHover />
        </div>
        <div>
          <pre className="input-tag">&#38;:focus</pre>
          <Input error onFocus />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input disabled /&gt;</pre>
          <Input disabled />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">
            &lt;Input helperText=”Some interesting text” /&gt;
          </pre>
          <Input helperText="Some interesting text" />
        </div>
        <div>
          <pre className="input-tag">
            &lt;Input helperText=”Some interesting text” error /&gt;
          </pre>
          <Input helperText="Some interesting text" error />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input endIcon /&gt;</pre>
          <Input startIcon="android_dialer" />
        </div>
        <div>
          <pre className="input-tag">&lt;Input startIcon /&gt;</pre>
          <Input endIcon="lock" />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input value=”text” /&gt;</pre>
          <Input value="text" />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input size=”sm” /&gt;</pre>
          <Input size="sm" />
        </div>
        <div>
          <pre className="input-tag">&lt;Input size=”md” /&gt;</pre>
          <Input size="md" />
        </div>
      </div>
      <div className="input-container">
        <div>
          <pre className="input-tag">&lt;Input fullWidth /&gt;</pre>
          <Input fullWidth />
        </div>
      </div>
      <div className="input-container">
        <div className="text-area">
          <pre className="input-tag">&lt;Input multiline row=”4” /&gt;</pre>
          <Input multiline row="4" />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  gap: 45px;
  padding: 2rem 4rem;
  .title {
    line-height: 36px;
    color: var(--gray2);
    font-weight: 500;
  }
  .input-tag {
    margin-bottom: 1.8rem;
    font-family: "Ubuntu Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #333333;
  }
  .input-container {
    display: grid;
    grid-template-columns: repeat(4, 155px);
    grid-template-rows: auto;
    gap: 155px;
    position: relative;
  }
  .icons-resource {
    color: #828282;
    a {
      text-decoration: none;
      color: #828282;
    }
  }
  .text-area {
    position: absolute;
  }
`;

export default App;
