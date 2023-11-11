<script lang="ts">
  import { readFromLocalStorage, writeToLocalStorage } from "$lib/utils/utils"
  export let quiz: any
  let isLoggedIn = true
</script>

<!-- {#if !isLoggedIn} -->
<section class="login">
  <div class="card">
    <h2>Please Log In</h2>
    <form>
      <ul class="login-list">
        <li>
          <label for="uname">Username:</label>
          <input
            type="text"
            id="uname"
            autocomplete="off"
            placeholder="jane Smith"
          />
        </li>
        <li>
          <label for="uId">ID number:</label>
          <input type="text" id="uId" autocomplete="off" placeholder="123456" />
        </li>
        <li>
          <button id="login-button" type="submit">Submit</button>
        </li>
      </ul>
    </form>
  </div>
</section>

<!-- {/if} -->

<style lang="scss">
  section.login {
    display: flex;
    font-size: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card {
      background: white;
      border-radius: 0.125em;
      box-shadow: 0.125em 0.125em 0.375em 0.05em rgba(128, 128, 128, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em 2em;
      padding-top: 0;
      h2 {
        align-self: flex-start;
        font-family: "Shadows Into Light", cursive;
        font-weight: bold;

        letter-spacing: 0.175rem;
        overflow-y: hidden;
        padding-bottom: 0.5em;
        padding-top: 0;
        text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 1);
        word-spacing: -0.35rem;
        margin-bottom: 0;
      }

      ul {
        margin-top: 0;
        padding-left: 0;

        li {
          list-style-type: none;
          margin-top: 1em;

          input {
            display: block;
            font-size: 100%;
            margin-top: 0.125em;
            padding: 0.25em 0.5em;

            border: none;
            border-radius: 0.125em;

            &::placeholder {
              font-size: 80%;
              color: #aaa;
            }
          }

          button {
            flex: 1 100%;
            background-color: inherit;
            border-radius: 0.125em;
            cursor: pointer;
            font-size: 125%;
            font-family: "Shadows Into Light", cursive;
            font-weight: bold;
            padding: 0.125em 0.5em;
            letter-spacing: 0.125rem;
            margin-top: 1em;
            text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 1);
          }
        }
      }
    }
  }
</style>
