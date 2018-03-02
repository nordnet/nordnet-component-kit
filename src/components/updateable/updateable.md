    initialState = { updateable: 0.5, interval: 2000 };

    <div>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .updateable--positive, .updateable--negative {
            animation-direction: alternate;
            animation-duration: 0.25s;
            animation-timing-function: ease-in-out;
            display: inline-block;
          }

          .updateable--positive {
            animation-name: bounceUp;
          }

          .updateable--negative {
            animation-name: bounceDown;
          }

          @keyframes bounceUp {
            0%, 100% { transform: translateY(0);  }
            50% { transform: translateY(-3px); }
          }

          @keyframes bounceDown {
            0%, 100% { transform: translateY(0);  }
            50% { transform: translateY(3px); }
          }
        `}}
      />
      Send updates every: <input style={{ width: 30 }} value={state.interval} onChange={(e) => setState({ interval: +e.target.value })} /> ms
      <button onClick={() => setInterval(() => setState({ updateable: +Math.random().toFixed(2) }), state.interval)}>Test Update</button><br/><br/>
      <span style={{marginRight: '2rem'}}>
        <Updateable value={ state.updateable } decimals={4} />
        <br />
        <Updateable value={ state.updateable } render={(props, state) => (
          <span className={props.className + ' ' + state.updateableClass}>
              {state.value.toFixed(2)}
              {' '}
              { state.diff > 0 ? '⬆️' : '⬇️' }
          </span>
        )} />
      </span>
    </div>
