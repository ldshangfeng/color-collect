import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../components/typography.css"

const TermsPageCN = () => {
  return (
    <Layout language={`cn`} lanLink={`/privacy-policy/`}>
      <SEO title={`隐私政策`}/>
      <div className="article">
        <h1>隐私政策</h1>

        <p>色采是一款色彩应用，所有功能的目的在于实现色彩的收集、整理、应用，帮助用户在工作中更高效的使用色彩，享受色彩。
          为使用色采软件（以下简称「色采」）及服务，你应当阅读并遵守本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通和使用某项服务的单独协议，并选择接受或者不接受。</p>

        <p>保护用户隐私是色采的一项基本原则，色采将会采取合理的措施保护用户的个人信息，为说明色采会如何收集、使用、存储你的个人信息以及你享有何种权利，我们将通过本指引向您阐述具体事宜。</p>

        <p>我们将逐一说明我们收集的信息类型以及用途，以便你了解我们开发色采过程中所使用了哪些个人信息。</p>

        <p>当你使用一些功能时，我们会在获得你同意后，获得一些你的信息，比如你在注册账号时，需要填写的用户手机号码和邮箱。</p>

        <p>色采永远不会主动分享或者转让你的任何个人信息给他人。目前不会，以后也不会。</p>

        <p>色采绝不会滥用自己的权限，收集用户额外信息，目前色采获取的所有数据如下：</p>
        <ul>
          <li>操作系统、设备型号、接入网络方式、屏幕分辨率：这几项数据作为通用的信息，并无敏感内容，色采只会在网络请求中带上这几类信息，方便我们针对不同用户进行适配，维护我们服务的正常运行。</li>
          <li>邮箱或者手机号（仅限安卓系统）：当你在注册色采账号时，需要使用邮箱或者手机号作为认证信息，你提交的邮箱或者手机号，我们会以加密的方式存储在服务器，我们不会将这些信息用于账号以外的其他功能</li>
          <li>密码（仅限安卓系统）：你账户的密码，我们会以强加密的形式，存储在我们的服务器，别人无法获取，甚至破解，此密码只有你知道。</li>
          <li>色卡数据（仅限 iOS 系统）：作为一个支持云同步的应用，色卡数据是云同步必备的功能，我们会将你的色卡数据，存储在苹果公司的 iCloud 服务器中，所有数据都经过高强度的安全保护，我们只会将你的色卡提供给你自己使用。</li>
        </ul>

        <p>请你理解，以上信息，均是色采为了提供正常服务所必须的，均由你主动提供，我们为你安全存储，如果你担心自己的色卡数据安全，可以选择自己删除数据，我们为你提供的功能和服务是不断更新和发展的，如果某一项功能需要获取其他信息，我们会提前在官网、版本更新中另行向你说明。</p>

        <p>色采绝不会将你的任何数据提供给他人，所有数据仅限于你个人知道。</p>

        <p>更新时间：2020.01.06</p>
        <p>福州台江区求实贸易有限公司</p>
      </div>
    </Layout>
  )
}

export default TermsPageCN
